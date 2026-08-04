(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const isFrench = root.lang.toLowerCase().startsWith("fr");

  const ui = isFrench
    ? {
        openMenu: "Ouvrir la navigation",
        closeMenu: "Fermer la navigation",
        galleryKicker: "Aperçu du produit",
        previous: "Afficher l’écran précédent",
        next: "Afficher l’écran suivant",
        closeGallery: "Fermer la galerie",
        required: "Ce champ est requis.",
        name: "Ajoutez votre nom.",
        email: "Entrez une adresse courriel valide.",
        company: "Ajoutez votre entreprise ou votre rôle.",
        timeline: "Choisissez l’échéancier qui convient le mieux.",
        message: "Décrivez ce qui doit être livré.",
        review: "Vérifiez les champs indiqués.",
        sendingButton: "Envoi en cours…",
        sendingStatus: "Envoi de votre demande…",
        sent: "Demande envoyée. Philippe la lira et vous répondra directement si le mandat convient.",
        rateLimit: "Trop de demandes ont été envoyées depuis cette connexion. Réessayez plus tard.",
        server: "La demande ne peut pas être livrée pour le moment. Réessayez dans quelques instants.",
        generic: "Vérifiez le formulaire et réessayez.",
        network: "La demande n’a pas pu joindre Sagesse Numérique. Vérifiez votre connexion et réessayez."
      }
    : {
        openMenu: "Open navigation",
        closeMenu: "Close navigation",
        galleryKicker: "Product preview",
        previous: "Show previous screen",
        next: "Show next screen",
        closeGallery: "Close gallery",
        required: "This field is required.",
        name: "Please add your name.",
        email: "Enter a valid work email address.",
        company: "Add your company or role.",
        timeline: "Choose the closest timing.",
        message: "Tell me what needs to ship.",
        review: "Please review the highlighted fields.",
        sendingButton: "Sending brief…",
        sendingStatus: "Sending your project brief…",
        sent: "Project brief sent. Philippe will review it and reply directly if it is a fit.",
        rateLimit: "Too many briefs were sent from this connection. Please try again later.",
        server: "The brief could not be delivered right now. Please try again in a moment.",
        generic: "Please review the form and try again.",
        network: "The brief could not reach Sagesse Numérique. Check your connection and try again."
      };

  const galleries = {
    arc: {
      project: "ARC Prize Foundation",
      slides: [
        {
          src: "https://pixelwisdom.ca/assets/projects/arc-prize/task-results-explorer.jpg",
          title: isFrench ? "Explorateur de résultats" : "Task results explorer",
          description: isFrench
            ? "Filtres de jeux de données et de modèles au-dessus d’une matrice d’évaluation dense."
            : "Dataset and model filters above a dense evaluation matrix.",
          alt: isFrench
            ? "Explorateur de résultats ARC-AGI avec filtres et tableau d’évaluation"
            : "ARC-AGI task results explorer with filters and an evaluation table"
        },
        {
          src: "https://pixelwisdom.ca/assets/projects/arc-prize/task-browser.jpg",
          title: isFrench ? "Navigateur visuel de tâches" : "Visual task browser",
          description: isFrench
            ? "Une grille navigable de problèmes de raisonnement abstrait ARC-AGI."
            : "A navigable grid of ARC-AGI abstract reasoning problems.",
          alt: isFrench
            ? "Navigateur visuel ARC-AGI montrant une grille de problèmes abstraits"
            : "ARC-AGI visual task browser showing a grid of abstract problems"
        },
        {
          src: "https://pixelwisdom.ca/assets/projects/arc-prize/task-detail.jpg",
          title: isFrench ? "Détail d’une tâche" : "Task detail",
          description: isFrench
            ? "Métadonnées, correspondance des couleurs et analyse des éléments de test."
            : "Metadata, color mapping, and test-item analysis.",
          alt: isFrench
            ? "Interface de détail ARC-AGI avec métadonnées et analyse d’un élément de test"
            : "ARC-AGI task detail interface with metadata and test-item analysis"
        },
        {
          src: "https://pixelwisdom.ca/assets/projects/arc-prize/model-performance.jpg",
          title: isFrench ? "Performance des modèles" : "Model performance matrix",
          description: isFrench
            ? "Comparaison des fournisseurs, configurations, résultats et coûts."
            : "Provider, model configuration, result, and cost comparison.",
          alt: isFrench
            ? "Matrice de performance comparant les modèles ARC-AGI"
            : "ARC-AGI model performance comparison matrix"
        },
        {
          src: "https://pixelwisdom.ca/assets/projects/arc-prize/evaluation-results.jpg",
          title: isFrench ? "Résultats d’évaluation" : "Evaluation results",
          description: isFrench
            ? "Lecture détaillée des essais, passes et sorties d’un modèle."
            : "Detailed reading of model attempts, passes, and outputs.",
          alt: isFrench
            ? "Résultats détaillés d’une évaluation de modèle ARC-AGI"
            : "Detailed ARC-AGI model evaluation results"
        },
        {
          src: "https://pixelwisdom.ca/assets/projects/arc-prize/test-item.jpg",
          title: isFrench ? "Élément de test" : "Test item analysis",
          description: isFrench
            ? "Inspection visuelle d’une entrée, d’une prédiction et de la sortie attendue."
            : "Visual inspection of an input, prediction, and expected output.",
          alt: isFrench
            ? "Analyse visuelle d’un élément de test ARC-AGI"
            : "Visual analysis of an ARC-AGI test item"
        }
      ]
    },
    zotero: {
      project: "Zotero ↔ NotebookLM",
      slides: [
        {
          src: "https://pixelwisdom.ca/assets/projects/zotero-notebooklm/settings.png",
          title: isFrench ? "Paramètres d’intégration" : "Integration settings",
          description: isFrench
            ? "Configuration automatique de la passerelle et des options de synchronisation."
            : "Automatic bridge setup and synchronization options.",
          alt: isFrench
            ? "Paramètres Zotero NotebookLM et options de synchronisation"
            : "Zotero NotebookLM settings and synchronization options"
        },
        {
          src: "https://pixelwisdom.ca/assets/projects/zotero-notebooklm/send-collections.png",
          title: isFrench ? "Synchronisation aller" : "Forward sync",
          description: isFrench
            ? "Sélection des collections et sous-collections à envoyer vers NotebookLM."
            : "Collection and subcollection selection for NotebookLM.",
          alt: isFrench
            ? "Sélection de collections Zotero à synchroniser vers NotebookLM"
            : "Selecting Zotero collections to sync to NotebookLM"
        },
        {
          src: "https://pixelwisdom.ca/assets/projects/zotero-notebooklm/import-notebooks.png",
          title: isFrench ? "Importation inverse" : "Reverse import",
          description: isFrench
            ? "Importation de carnets, de contenu source et de notes vers Zotero."
            : "Importing notebooks, source content, and notes into Zotero.",
          alt: isFrench
            ? "Importation de carnets NotebookLM dans Zotero"
            : "Importing NotebookLM notebooks into Zotero"
        },
        {
          src: "https://pixelwisdom.ca/assets/projects/zotero-notebooklm/browser-bridge.png",
          title: isFrench ? "Passerelle navigateur" : "Browser bridge",
          description: isFrench
            ? "Connexion authentifiée au navigateur par une file de tâches locale."
            : "Authenticated browser connection through a local task queue.",
          alt: isFrench
            ? "Passerelle navigateur authentifiée pour Zotero et NotebookLM"
            : "Authenticated browser bridge for Zotero and NotebookLM"
        },
        {
          src: "https://pixelwisdom.ca/assets/projects/zotero-notebooklm/sending-progress.png",
          title: isFrench ? "Progression de l’envoi" : "Sending progress",
          description: isFrench
            ? "État détaillé de la création du carnet et du transfert des sources."
            : "Detailed notebook creation and source-transfer state.",
          alt: isFrench
            ? "Progression d’un envoi de sources vers NotebookLM"
            : "Progress of sending sources to NotebookLM"
        },
        {
          src: "https://pixelwisdom.ca/assets/projects/zotero-notebooklm/importing-progress.png",
          title: isFrench ? "Progression de l’importation" : "Importing progress",
          description: isFrench
            ? "Suivi de l’importation des guides, sources et notes dans Zotero."
            : "Tracking source-guide, source-content, and note imports into Zotero.",
          alt: isFrench
            ? "Progression d’une importation NotebookLM vers Zotero"
            : "Progress of a NotebookLM import into Zotero"
        }
      ]
    }
  };

  const settleInitialHash = async () => {
    if (!window.location.hash) return;

    let targetId;
    try {
      targetId = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) return;

    try {
      await document.fonts?.ready;
    } catch {
      // Font loading should not block hash navigation.
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    });
  };

  window.addEventListener("load", settleInitialHash, { once: true });

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  const setMenuOpen = (open, moveFocus = false) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.querySelector(".visually-hidden").textContent = open ? ui.closeMenu : ui.openMenu;
    mobileMenu.setAttribute("aria-hidden", String(!open));
    mobileMenu.inert = !open;
    mobileMenu.classList.toggle("is-open", open);
    body.classList.toggle("menu-open", open);
    if (open && moveFocus) mobileMenu.querySelector("a")?.focus();
  };

  if (menuToggle && mobileMenu) {
    setMenuOpen(false);
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      setMenuOpen(open, open);
    });
    mobileMenu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenuOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });
    window.matchMedia("(min-width: 901px)").addEventListener?.("change", (event) => {
      if (event.matches) setMenuOpen(false);
    });
  }

  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  root.classList.add("reveal-ready");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -7%", threshold: 0.08 }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const dialog = document.querySelector("[data-gallery-dialog]");
  const galleryOpeners = [...document.querySelectorAll("[data-gallery-open]")];

  if (dialog && galleryOpeners.length > 0) {
    const image = dialog.querySelector("[data-gallery-image]");
    const projectTitle = dialog.querySelector("[data-gallery-project]");
    const slideTitle = dialog.querySelector("[data-gallery-title]");
    const description = dialog.querySelector("[data-gallery-description]");
    const position = dialog.querySelector("[data-gallery-position]");
    const thumbs = dialog.querySelector("[data-gallery-thumbs]");
    const previous = dialog.querySelector("[data-gallery-previous]");
    const next = dialog.querySelector("[data-gallery-next]");
    const close = dialog.querySelector("[data-gallery-close]");
    const kicker = dialog.querySelector("[data-gallery-kicker]");
    let activeGallery = null;
    let activeIndex = 0;
    let lastTrigger = null;

    if (kicker) kicker.textContent = ui.galleryKicker;
    close?.setAttribute("aria-label", ui.closeGallery);

    const normalizeIndex = (index) => {
      const length = activeGallery.slides.length;
      return ((index % length) + length) % length;
    };

    const renderThumbs = () => {
      thumbs.replaceChildren();
      activeGallery.slides.forEach((slide, index) => {
        const button = document.createElement("button");
        const thumbnail = document.createElement("img");
        button.className = "gallery-thumb";
        button.type = "button";
        button.setAttribute("aria-label", slide.title);
        button.dataset.galleryThumb = String(index);
        thumbnail.src = slide.src;
        thumbnail.alt = "";
        thumbnail.loading = "lazy";
        button.append(thumbnail);
        button.addEventListener("click", () => renderSlide(index, true));
        thumbs.append(button);
      });
    };

    const renderSlide = (index, scrollThumb = false) => {
      activeIndex = normalizeIndex(index);
      const slide = activeGallery.slides[activeIndex];
      image.src = slide.src;
      image.alt = slide.alt;
      projectTitle.textContent = activeGallery.project;
      slideTitle.textContent = slide.title;
      description.textContent = slide.description;
      position.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(
        activeGallery.slides.length
      ).padStart(2, "0")}`;
      previous.setAttribute("aria-label", `${ui.previous}: ${activeGallery.slides[normalizeIndex(activeIndex - 1)].title}`);
      next.setAttribute("aria-label", `${ui.next}: ${activeGallery.slides[normalizeIndex(activeIndex + 1)].title}`);
      [...thumbs.children].forEach((thumb, thumbIndex) => {
        if (thumbIndex === activeIndex) thumb.setAttribute("aria-current", "true");
        else thumb.removeAttribute("aria-current");
      });
      if (scrollThumb) {
        thumbs.children[activeIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
      }
    };

    const openGallery = (trigger) => {
      const gallery = galleries[trigger.dataset.galleryOpen];
      if (!gallery) return;
      activeGallery = gallery;
      lastTrigger = trigger;
      renderThumbs();
      const requestedIndex = Number.parseInt(trigger.dataset.galleryIndex || "0", 10);
      renderSlide(Number.isNaN(requestedIndex) ? 0 : requestedIndex);
      body.classList.add("dialog-open");
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      close.focus({ preventScroll: true });
    };

    const closeGallery = () => {
      if (typeof dialog.close === "function") dialog.close();
      else {
        dialog.removeAttribute("open");
        body.classList.remove("dialog-open");
        lastTrigger?.focus({ preventScroll: true });
      }
    };

    galleryOpeners.forEach((trigger) => trigger.addEventListener("click", () => openGallery(trigger)));
    previous.addEventListener("click", () => renderSlide(activeIndex - 1, true));
    next.addEventListener("click", () => renderSlide(activeIndex + 1, true));
    close.addEventListener("click", closeGallery);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeGallery();
    });
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeGallery();
    });
    dialog.addEventListener("close", () => {
      body.classList.remove("dialog-open");
      lastTrigger?.focus({ preventScroll: true });
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        renderSlide(activeIndex - 1, true);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        renderSlide(activeIndex + 1, true);
      }
      if (event.key === "Home") {
        event.preventDefault();
        renderSlide(0, true);
      }
      if (event.key === "End") {
        event.preventDefault();
        renderSlide(activeGallery.slides.length - 1, true);
      }
    });
  }

  const contactForm = document.querySelector("[data-contact-form]");
  const formStatus = document.querySelector("[data-form-status]");
  if (!contactForm || !formStatus) return;

  let formStartedAt = Date.now();
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const elapsedInput = contactForm.querySelector("[data-form-elapsed]");
  const pageInput = contactForm.querySelector('input[name="page"]');
  const fields = [...contactForm.querySelectorAll("input[required], select[required], textarea[required]")];

  if (pageInput) pageInput.value = window.location.href;

  const fieldIsValid = (field) => {
    const value = field.value.trim();
    if (!value) return false;
    if (field.type === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return true;
  };

  const renderFieldState = (field, showError) => {
    const valid = fieldIsValid(field);
    const errorElement = contactForm.querySelector(`[data-error-for="${field.name}"]`);
    field.setAttribute("aria-invalid", String(showError && !valid));
    if (errorElement) errorElement.textContent = showError && !valid ? ui[field.name] || ui.required : "";
    return valid;
  };

  const setStatus = (message, state = "") => {
    formStatus.textContent = message;
    formStatus.className = `form-status${state ? ` ${state}` : ""}`;
  };

  const friendlyServerError = (response, payload) => {
    if (response.status === 429) return ui.rateLimit;
    if (response.status >= 500) return ui.server;
    if (payload?.error === "email is invalid") return ui.email;
    return ui.generic;
  };

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    setStatus("");
    const invalidFields = fields.filter((field) => !renderFieldState(field, true));
    if (invalidFields.length > 0) {
      setStatus(ui.review, "error");
      invalidFields[0].focus();
      return;
    }

    if (elapsedInput) elapsedInput.value = String(Date.now() - formStartedAt);
    if (pageInput) pageInput.value = window.location.href;

    const originalLabel = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = ui.sendingButton;
    setStatus(ui.sendingStatus);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: { accept: "application/json" },
        body: new FormData(contactForm)
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.ok) throw new FormSubmissionError(friendlyServerError(response, payload));
      contactForm.reset();
      fields.forEach((field) => renderFieldState(field, false));
      formStartedAt = Date.now();
      setStatus(ui.sent, "success");
    } catch (error) {
      setStatus(error instanceof FormSubmissionError ? error.message : ui.network, "error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
    }
  });

  class FormSubmissionError extends Error {}
})();
