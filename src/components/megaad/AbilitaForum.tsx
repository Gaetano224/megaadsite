import { useState, useEffect } from "react";
import { MessageSquare, ThumbsUp, Send, Search, Plus, X, Calendar, User, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";

interface ForumReply {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
  likedBy: string[];
}

interface ForumQuestion {
  id: string;
  author: string;
  heroId: string;
  content: string;
  createdAt: string;
  likes: number;
  likedBy: string[];
  replies: ForumReply[];
}

const heroesList = [
  { id: "general", name: "Generale / Regole di Gioco" },
  { id: "agri", name: "Agri" },
  { id: "aiona", name: "Aiona" },
  { id: "azrael", name: "Azrael" },
  { id: "caspiana", name: "Caspiana" },
  { id: "dianthra", name: "Dianthra" },
  { id: "elara", name: "Elara" },
  { id: "faelan", name: "Faelan" },
  { id: "gostrel", name: "Gostrel" },
  { id: "grorn", name: "Grorn" },
  { id: "hannya", name: "Hannya" },
  { id: "herkaimer", name: "Herkaimer" },
  { id: "ioluali", name: "Ioluali" },
  { id: "istras", name: "Istras" },
  { id: "kaelen", name: "Kaelen" },
  { id: "karka", name: "Karka" },
  { id: "kenji", name: "Kenji" },
  { id: "kirin", name: "Kirin" },
  { id: "luver", name: "Luver" },
  { id: "montwel", name: "Montwel" },
  { id: "ollerts", name: "Ollerts" },
  { id: "portium", name: "Portium" },
  { id: "rapdar", name: "Rapdar" },
  { id: "ryker", name: "Ryker" },
  { id: "sertor", name: "Sertor" },
  { id: "sindaum", name: "Sindaum" },
  { id: "sir-gideon", name: "Sir Gideon" },
  { id: "theron", name: "Theron" },
  { id: "vespyr", name: "Vespyr" },
  { id: "xelif", name: "Xelif" },
  { id: "zayne", name: "Zayne" },
];

export function AbilitaForum() {
  const [questions, setQuestions] = useState<ForumQuestion[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("megaad_abilities_forum_v2");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse saved forum questions", e);
        }
      }
    }
    return [];
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem("megaad_abilities_forum_v2", JSON.stringify(questions));
  }, [questions]);

  // Filtering states
  const [selectedHeroFilter, setSelectedHeroFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Question Form states
  const [showAskForm, setShowAskForm] = useState(false);
  const [newQuestionName, setNewQuestionName] = useState("");
  const [newQuestionHero, setNewQuestionHero] = useState("general");
  const [newQuestionContent, setNewQuestionContent] = useState("");

  // Reply Form states (keyed by question ID)
  const [showReplyFormId, setShowReplyFormId] = useState<string | null>(null);
  const [newReplyName, setNewReplyName] = useState("");
  const [newReplyContent, setNewReplyContent] = useState("");

  // Expanded replies states (keyed by question ID)
  const [expandedRepliesIds, setExpandedRepliesIds] = useState<Record<string, boolean>>({});

  // Format date helper
  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Like Question
  const handleLikeQuestion = (qId: string) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === qId) {
          const hasLiked = q.likedBy.includes("user");
          const updatedLikedBy = hasLiked
            ? q.likedBy.filter((u) => u !== "user")
            : [...q.likedBy, "user"];
          return {
            ...q,
            likes: q.likes + (hasLiked ? -1 : 1),
            likedBy: updatedLikedBy,
          };
        }
        return q;
      })
    );
  };

  // Like Reply
  const handleLikeReply = (qId: string, rId: string) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === qId) {
          return {
            ...q,
            replies: q.replies.map((r) => {
              if (r.id === rId) {
                const hasLiked = r.likedBy.includes("user");
                const updatedLikedBy = hasLiked
                  ? r.likedBy.filter((u) => u !== "user")
                  : [...r.likedBy, "user"];
                return {
                  ...r,
                  likes: r.likes + (hasLiked ? -1 : 1),
                  likedBy: updatedLikedBy,
                };
              }
              return r;
            }),
          };
        }
        return q;
      })
    );
  };

  // Toggle replies expanded state
  const toggleReplies = (qId: string) => {
    setExpandedRepliesIds((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  // Submit Question
  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionName.trim() || !newQuestionContent.trim()) {
      toast.error("Per favore, compila tutti i campi obbligatori.");
      return;
    }

    const newQuestion: ForumQuestion = {
      id: `q-${Date.now()}`,
      author: newQuestionName.trim(),
      heroId: newQuestionHero,
      content: newQuestionContent.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
      likedBy: [],
      replies: [],
    };

    setQuestions((prev) => [newQuestion, ...prev]);
    setNewQuestionName("");
    setNewQuestionHero("general");
    setNewQuestionContent("");
    setShowAskForm(false);
    toast.success("Domanda pubblicata con successo nel forum!");
  };

  // Submit Reply
  const handleSubmitReply = (e: React.FormEvent, qId: string) => {
    e.preventDefault();
    if (!newReplyName.trim() || !newReplyContent.trim()) {
      toast.error("Per favore, compila tutti i campi.");
      return;
    }

    const newReply: ForumReply = {
      id: `r-${Date.now()}`,
      author: newReplyName.trim(),
      content: newReplyContent.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
      likedBy: [],
    };

    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === qId) {
          return {
            ...q,
            replies: [...q.replies, newReply],
          };
        }
        return q;
      })
    );

    // Expand replies automatically when a new one is added
    setExpandedRepliesIds((prev) => ({
      ...prev,
      [qId]: true,
    }));

    setNewReplyName("");
    setNewReplyContent("");
    setShowReplyFormId(null);
    toast.success("Risposta pubblicata con successo!");
  };

  // Filter questions
  const filteredQuestions = questions.filter((q) => {
    const matchesHero = selectedHeroFilter === "all" || q.heroId === selectedHeroFilter;
    const matchesSearch =
      q.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (heroesList.find((h) => h.id === q.heroId)?.name || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesHero && matchesSearch;
  });

  return (
    <section className="px-6 pb-24 border-t border-gold/10 pt-16 mt-8">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="mb-2 text-xs uppercase tracking-[0.4em] text-gold">Domande & Risposte</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gold-soft mb-4 flex items-center justify-center gap-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <MessageSquare className="h-7 w-7 text-gold flex-shrink-0" />
            Forum delle Abilità
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80 text-sm md:text-base">
            Hai dubbi sull'interazione di una carta, su un rimbalzo di Ryker o sul range di Montwel?
            Fai una domanda alla community o rispondi a quelle degli altri giocatori!
          </p>
          <div className="mx-auto mt-6 h-px w-32 gold-divider" />
        </div>

        {/* Toolbar: Search, Filters & Ask Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-grow max-w-3xl">
            {/* Search */}
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gold/50" />
              </span>
              <input
                type="text"
                placeholder="Cerca tra le domande..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-navy/60 border border-gold/20 rounded text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300 text-sm"
              />
            </div>

            {/* Hero Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedHeroFilter}
                onChange={(e) => setSelectedHeroFilter(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 bg-navy/60 border border-gold/20 rounded text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300 text-sm cursor-pointer"
              >
                <option value="all">Tutti gli Eroi / Generale</option>
                {heroesList.map((hero) => (
                  <option key={hero.id} value={hero.id}>
                    {hero.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Ask Button */}
          <button
            onClick={() => setShowAskForm(!showAskForm)}
            className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-navy bg-gold hover:bg-gold-soft px-5 py-2.5 rounded font-bold transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] flex-shrink-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {showAskForm ? (
              <>
                <X className="h-4 w-4" /> Chiudi form
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" /> Fai una Domanda
              </>
            )}
          </button>
        </div>

        {/* Ask Question Form (Collapsible) */}
        {showAskForm && (
          <div className="gold-frame rounded-lg bg-navy-deep/80 p-6 md:p-8 mb-8 border border-gold/40 animate-fade-in">
            <h3
              className="text-xl font-bold text-gold-soft mb-4 flex items-center gap-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Crea una nuova discussione
            </h3>
            <form onSubmit={handleSubmitQuestion} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Author Name */}
                <div>
                  <label htmlFor="author-name" className="block text-xs uppercase tracking-widest text-gold-soft mb-2 font-semibold">
                    Nome / Pseudonimo *
                  </label>
                  <input
                    id="author-name"
                    type="text"
                    required
                    placeholder="Es. GuardianoDelleOmbre"
                    value={newQuestionName}
                    onChange={(e) => setNewQuestionName(e.target.value)}
                    className="w-full rounded border border-gold/30 bg-navy px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-sm"
                  />
                </div>

                {/* Hero Select */}
                <div>
                  <label htmlFor="hero-select" className="block text-xs uppercase tracking-widest text-gold-soft mb-2 font-semibold">
                    Argomento / Eroe Relativo
                  </label>
                  <select
                    id="hero-select"
                    value={newQuestionHero}
                    onChange={(e) => setNewQuestionHero(e.target.value)}
                    className="w-full rounded border border-gold/30 bg-navy px-4 py-2.5 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-sm cursor-pointer"
                  >
                    {heroesList.map((hero) => (
                      <option key={hero.id} value={hero.id}>
                        {hero.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Question Content */}
              <div>
                <label htmlFor="question-content" className="block text-xs uppercase tracking-widest text-gold-soft mb-2 font-semibold">
                  La tua Domanda *
                </label>
                <textarea
                  id="question-content"
                  required
                  rows={4}
                  placeholder="Scrivi qui il tuo dubbio in modo dettagliato..."
                  value={newQuestionContent}
                  onChange={(e) => setNewQuestionContent(e.target.value)}
                  className="w-full rounded border border-gold/30 bg-navy px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-sm"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAskForm(false)}
                  className="px-4 py-2 text-xs uppercase tracking-widest text-gold/60 hover:text-gold border border-transparent hover:border-gold/30 rounded transition-all duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-navy bg-gold hover:bg-gold-soft px-6 py-2 rounded font-bold transition-all duration-300 cursor-pointer"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Send className="h-3 w-3" /> Invia Domanda
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q) => {
              const heroObj = heroesList.find((h) => h.id === q.heroId);
              const isHeroGeneral = q.heroId === "general";
              const repliesCount = q.replies.length;
              const hasUserLiked = q.likedBy.includes("user");
              const isExpanded = !!expandedRepliesIds[q.id];

              return (
                <div
                  key={q.id}
                  className="gold-frame rounded-lg bg-navy/80 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] border border-gold/20"
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    {/* Badge & Author */}
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Hero Badge */}
                      <span
                        className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-semibold border ${
                          isHeroGeneral
                            ? "border-foreground/20 text-foreground/80 bg-foreground/5"
                            : "border-gold/30 text-gold-soft bg-gold/10"
                        }`}
                      >
                        {heroObj?.name || q.heroId}
                      </span>

                      {/* Author Info */}
                      <span className="flex items-center gap-1.5 text-xs text-foreground/60">
                        <User className="h-3.5 w-3.5 text-gold/60" />
                        <span className="font-medium text-foreground/80">{q.author}</span>
                      </span>
                    </div>

                    {/* Date */}
                    <span className="flex items-center gap-1.5 text-xs text-foreground/50">
                      <Calendar className="h-3.5 w-3.5 text-gold/40" />
                      {formatDate(q.createdAt)}
                    </span>
                  </div>

                  {/* Question Text */}
                  <p className="text-foreground/90 font-serif text-base md:text-lg mb-6 leading-relaxed">
                    {q.content}
                  </p>

                  {/* Card Footer / Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between border-t border-gold/10 pt-4 gap-4">
                    {/* Likes & Replies Toggles */}
                    <div className="flex items-center gap-4">
                      {/* Like button */}
                      <button
                        onClick={() => handleLikeQuestion(q.id)}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded transition-all duration-300 cursor-pointer ${
                          hasUserLiked
                            ? "bg-gold/20 text-gold border border-gold/40"
                            : "text-gold/60 hover:text-gold hover:bg-gold/5 border border-transparent hover:border-gold/10"
                        }`}
                      >
                        <ThumbsUp className={`h-3.5 w-3.5 ${hasUserLiked ? "fill-gold" : ""}`} />
                        <span>{q.likes}</span>
                      </button>

                      {/* Replies Toggle */}
                      <button
                        onClick={() => toggleReplies(q.id)}
                        className="inline-flex items-center gap-1.5 text-xs text-foreground/60 hover:text-gold transition-colors py-1.5 cursor-pointer"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-gold/60" />
                        <span>
                          {repliesCount === 0
                            ? "Nessuna risposta"
                            : repliesCount === 1
                            ? "1 Risposta"
                            : `${repliesCount} Risposte`}
                        </span>
                        {repliesCount > 0 && (
                          isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
                        )}
                      </button>
                    </div>

                    {/* Reply Button */}
                    <button
                      onClick={() => {
                        setShowReplyFormId(showReplyFormId === q.id ? null : q.id);
                        if (showReplyFormId !== q.id) {
                          setNewReplyName("");
                          setNewReplyContent("");
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-soft border border-gold/30 hover:border-gold/50 bg-gold/5 px-3 py-1.5 rounded transition-all duration-300 cursor-pointer"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <Plus className="h-3 w-3" /> Rispondi
                    </button>
                  </div>

                  {/* Reply Form */}
                  {showReplyFormId === q.id && (
                    <div className="mt-4 p-4 rounded bg-navy-deep/60 border border-gold/20 animate-fade-in">
                      <h4 className="text-xs uppercase tracking-widest text-gold-soft mb-3 font-semibold">
                        Aggiungi una risposta
                      </h4>
                      <form onSubmit={(e) => handleSubmitReply(e, q.id)} className="space-y-3">
                        <div className="grid grid-cols-1 gap-2">
                          <input
                            type="text"
                            required
                            placeholder="Il tuo nome/pseudonimo"
                            value={newReplyName}
                            onChange={(e) => setNewReplyName(e.target.value)}
                            className="w-full rounded border border-gold/20 bg-navy px-3 py-2 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none text-sm"
                          />
                        </div>
                        <textarea
                          required
                          rows={3}
                          placeholder="Scrivi qui la tua risposta..."
                          value={newReplyContent}
                          onChange={(e) => setNewReplyContent(e.target.value)}
                          className="w-full rounded border border-gold/20 bg-navy px-3 py-2 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none text-sm"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setShowReplyFormId(null)}
                            className="px-3 py-1 text-xs text-foreground/60 hover:text-gold transition-colors"
                          >
                            Annulla
                          </button>
                          <button
                            type="submit"
                            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-navy bg-gold hover:bg-gold-soft px-4 py-1.5 rounded font-bold transition-all duration-300 cursor-pointer"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            Invia
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Nested Replies List */}
                  {isExpanded && repliesCount > 0 && (
                    <div className="mt-6 pl-4 md:pl-6 border-l border-gold/20 space-y-4">
                      {q.replies.map((reply) => {
                        const hasReplyLiked = reply.likedBy.includes("user");

                        return (
                          <div
                            key={reply.id}
                            className="p-4 rounded-lg bg-navy-deep/40 border border-gold/10"
                          >
                            {/* Reply Header */}
                            <div className="flex items-center justify-between gap-3 mb-2">
                              <span className="flex items-center gap-1 text-xs">
                                <User className="h-3 w-3 text-gold/60" />
                                <span className="font-semibold text-foreground/80">{reply.author}</span>
                              </span>
                              <span className="flex items-center gap-1 text-xs text-foreground/50">
                                <Calendar className="h-3 w-3 text-gold/40" />
                                {formatDate(reply.createdAt)}
                              </span>
                            </div>

                            {/* Reply Content */}
                            <p className="text-foreground/85 text-sm md:text-base leading-relaxed mb-3">
                              {reply.content}
                            </p>

                            {/* Reply Action */}
                            <div className="flex justify-end">
                              <button
                                onClick={() => handleLikeReply(q.id, reply.id)}
                                className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded transition-all duration-300 cursor-pointer ${
                                  hasReplyLiked
                                    ? "bg-gold/10 text-gold border border-gold/30"
                                    : "text-foreground/50 hover:text-gold hover:bg-gold/5"
                                }`}
                              >
                                <ThumbsUp className={`h-3 w-3 ${hasReplyLiked ? "fill-gold" : ""}`} />
                                <span>{reply.likes}</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 px-6 gold-frame rounded-lg bg-navy/40 border border-gold/10 max-w-lg mx-auto">
              <MessageSquare className="h-10 w-10 text-gold/30 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gold-soft mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Nessuna discussione trovata
              </h4>
              <p className="text-foreground/70 text-sm mb-4">
                Non ci sono domande corrispondenti ai criteri di ricerca. Sii il primo a fare una domanda!
              </p>
              {(selectedHeroFilter !== "all" || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedHeroFilter("all");
                    setSearchQuery("");
                  }}
                  className="text-xs uppercase tracking-widest text-gold hover:text-gold-soft font-semibold transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Azzera filtri
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
