// Community Manager Dashboard JavaScript

class CommunityManagerDashboard {
  constructor() {
    this.currentWeek = this.getCurrentWeekDates();
    this.taskStates = new Map(); // In-memory storage for task completion states
    this.platformData = {
      instagram: {
        name: "Instagram",
        percentage: 35,
        color: "#E4405F",
        tasks: [
          {
            id: "ig_post_1", title: "Post Lunes - Historia Flamenco", type: "post", priority: "alta",
            recommendations: "Comparte historia de un palo flamenco específico. Usa imágenes históricas o recreaciones. Incluye hashtags: #historiaflamenco #andalucia #tradicion. Mejor horario: 18:00-19:00",
            timeEstimate: "45 min"
          },
          {
            id: "ig_post_2", title: "Post Martes - Técnica Tutorial", type: "post", priority: "alta",
            recommendations: "Tutorial de técnica específica (zapateado, palmas, etc). Video corto o carrusel de imágenes. Engagement: pregunta qué técnica quieren aprender. Horario: 19:00-20:00",
            timeEstimate: "60 min"
          },
          {
            id: "ig_post_3", title: "Post Miércoles - Artista Destacado", type: "post", priority: "alta",
            recommendations: "Presenta artista flamenco contemporáneo o histórico. Include videos/fotos de actuaciones. Menciona logros y estilo único. Horario: 18:30-19:30",
            timeEstimate: "50 min"
          },
          {
            id: "ig_post_4", title: "Post Jueves - Lugares Emblemáticos", type: "post", priority: "alta",
            recommendations: "Muestra peñas, teatros o lugares históricos del flamenco en Andalucía. Fotos de calidad, datos interesantes. Horario: 19:00-20:00",
            timeEstimate: "45 min"
          },
          {
            id: "ig_post_5", title: "Post Viernes - Festival/Evento", type: "post", priority: "alta",
            recommendations: "Promociona eventos próximos o recapitula pasados. Incluye fechas, ubicaciones. Call-to-action para asistencia. Horario: 17:00-19:00",
            timeEstimate: "40 min"
          },
          {
            id: "ig_stories", title: "Stories Diarias (15-20/día)", type: "stories", priority: "media",
            recommendations: "Mezcla: behind-the-scenes, polls, preguntas, highlights de posts. Usa stickers interactivos. Mantén narrativa del día. Publica cada 2-3 horas",
            timeEstimate: "30 min/día"
          },
          {
            id: "ig_reels_1", title: "Reel #1 - Tutorial Rápido", type: "reels", priority: "alta",
            recommendations: "Tutorial de 30-60 seg sobre técnica básica. Usa trending audio adaptado. Subtítulos claros. Hashtags: #flamenco #tutorial #andalucia",
            timeEstimate: "90 min"
          },
          {
            id: "ig_reels_2", title: "Reel #2 - Behind the Scenes", type: "reels", priority: "alta",
            recommendations: "Muestra preparación para actuación o clase. Música flamenca de fondo. Momentos auténticos. Call-to-action al final",
            timeEstimate: "75 min"
          },
          {
            id: "ig_live", title: "Live Semanal", type: "live", priority: "media",
            recommendations: "Anuncia con 24h anticipación. Tema educativo o Q&A. Duración 20-30 min. Guarda como IGTV. Promociona en stories durante el día",
            timeEstimate: "45 min"
          },
          {
            id: "ig_engagement", title: "Engagement Diario", type: "engagement", priority: "alta",
            recommendations: "Responde comentarios en <2 horas. Interactúa con cuentas similares. Like y comenta en posts de seguidores activos. Monitorea menciones",
            timeEstimate: "30 min/día"
          }
        ]
      },
      tiktok: {
        name: "TikTok", 
        percentage: 32,
        color: "#FF0050",
        tasks: [
          {
            id: "tt_video_1", title: "Video Educativo - Dato Curioso", type: "video", priority: "alta",
            recommendations: "Dato curioso sobre flamenco en <60 seg. Hook fuerte primeros 3 seg. Usa trending hashtags + #flamenco #andalucia. Sube 18:00-24:00",
            timeEstimate: "75 min"
          },
          {
            id: "tt_video_2", title: "Video Tutorial Técnica", type: "video", priority: "alta",
            recommendations: "Enseña paso básico o técnica. Break down en cámara lenta. Música flamenca de fondo. Fácil de seguir para principiantes",
            timeEstimate: "80 min"
          },
          {
            id: "tt_video_3", title: "Video Trending Sound", type: "video", priority: "media",
            recommendations: "Adapta audio viral al flamenco. Transición creativa. Outfit tradicional vs moderno. Timing perfecto con la música",
            timeEstimate: "70 min"
          },
          {
            id: "tt_challenge_1", title: "Participar Challenge Trending", type: "challenge", priority: "alta", 
            recommendations: "Adapta trending challenge al flamenco. Usa hashtags del challenge original + #flamenco. Video vertical de calidad",
            timeEstimate: "90 min"
          },
          {
            id: "tt_challenge_2", title: "Crear #ZapateoChallenge", type: "challenge", priority: "alta",
            recommendations: "Crea challenge original con zapateado básico. Demo fácil de seguir. CTA clara para participar. Música pegadiza flamenca",
            timeEstimate: "120 min"
          },
          {
            id: "tt_duet", title: "Duetos y Colaboraciones", type: "collaboration", priority: "media",
            recommendations: "Haz dueto con otros creadores de flamenco. Reacciona a videos de estudiantes. Corrige técnicas constructivamente",
            timeEstimate: "45 min"
          },
          {
            id: "tt_trends", title: "Research Tendencias Diario", type: "research", priority: "media",
            recommendations: "Revisa For You Page 20 min. Analiza trending sounds. Identifica adaptables al flamenco. Guarda ideas para contenido futuro",
            timeEstimate: "20 min/día"
          },
          {
            id: "tt_engagement", title: "Engagement TikTok", type: "engagement", priority: "media",
            recommendations: "Responde comentarios rápidamente. Interactúa con community flamenca. Comenta videos relacionados. Sigue cuentas relevantes",
            timeEstimate: "25 min/día"
          }
        ]
      },
      facebook: {
        name: "Facebook",
        percentage: 22, 
        color: "#1877F2",
        tasks: [
          {
            id: "fb_post_1", title: "Post Storytelling - Historia Personal", type: "post", priority: "alta",
            recommendations: "Historia emocional de artista o tradición familiar. 200-300 palabras. Incluye pregunta para engagement. Mejor horario: 20:00-22:00",
            timeEstimate: "40 min"
          },
          {
            id: "fb_post_2", title: "Post Educativo - Palos Flamencos", type: "post", priority: "alta",
            recommendations: "Explica origen y características de un palo específico. Include audio/video ejemplo. Formato carrusel informativo",
            timeEstimate: "50 min"
          },
          {
            id: "fb_post_3", title: "Post Evento/Festival", type: "post", priority: "media",
            recommendations: "Promociona eventos de flamenco en Andalucía. Incluye detalles completos. Crea evento de Facebook. Cross-post en grupos",
            timeEstimate: "35 min"
          },
          {
            id: "fb_community", title: "Gestión Grupos Privados", type: "community", priority: "media",
            recommendations: "Modera comentarios. Aprueba nuevos miembros. Publica contenido exclusivo. Fomenta discusiones. Responde preguntas",
            timeEstimate: "25 min/día"
          },
          {
            id: "fb_event", title: "Evento Virtual Mensual", type: "event", priority: "baja",
            recommendations: "Crea evento virtual: masterclass, Q&A o showcase. Programa con 2 semanas anticipación. Promociona en todas las plataformas",
            timeEstimate: "60 min"
          },
          {
            id: "fb_analytics", title: "Análisis Facebook Insights", type: "analytics", priority: "media",
            recommendations: "Revisa métricas semanales. Identifica posts de mejor rendimiento. Analiza demografía de audiencia. Ajusta estrategia",
            timeEstimate: "30 min"
          }
        ]
      },
      youtube: {
        name: "YouTube",
        percentage: 11,
        color: "#FF0000", 
        tasks: [
          {
            id: "yt_video_1", title: "Video Educativo Principal", type: "video", priority: "alta",
            recommendations: "10-15 min de contenido educativo profundo. Thumbnail atractivo. Título SEO optimizado. Descripción completa con timestamps. Publica 19:00-21:00",
            timeEstimate: "3 horas"
          },
          {
            id: "yt_video_2", title: "Video Tutorial Detallado", type: "video", priority: "alta",
            recommendations: "Tutorial paso a paso de técnica avanzada. Múltiples ángulos de cámara. Explicación clara y pausada. Include errores comunes",
            timeEstimate: "2.5 horas"
          },
          {
            id: "yt_seo", title: "Optimización SEO", type: "optimization", priority: "media",
            recommendations: "Research keywords relevantes. Optimiza títulos existentes. Actualiza descripciones. Añade cards y end screens. Tags específicos",
            timeEstimate: "45 min"
          }
        ]
      }
    };
    
    this.generalTasks = [
      {
        id: "analysis", title: "Análisis Competencia Semanal", priority: "media",
        recommendations: "Revisa 5 competidores principales. Analiza su contenido top. Identifica gaps y oportunidades. Documenta insights en spreadsheet",
        timeEstimate: "60 min"
      },
      {
        id: "planning", title: "Planificación Semana Siguiente", priority: "alta", 
        recommendations: "Calendariza contenidos por plataforma. Asigna temas y formatos específicos. Coordina con colaboradores. Prepara assets visuales",
        timeEstimate: "90 min"
      },
      {
        id: "metrics", title: "Reporte Métricas Semanal", priority: "alta",
        recommendations: "Compila datos de todas las plataformas. Calcula engagement rates. Identifica top performing content. Presenta insights al equipo",
        timeEstimate: "75 min"
      },
      {
        id: "assets", title: "Backup y Organización Assets", priority: "baja",
        recommendations: "Organiza fotos, videos y gráficos en carpetas. Backup en drive. Actualiza banco de recursos. Elimina archivos innecesarios",
        timeEstimate: "40 min"
      },
      {
        id: "partnerships", title: "Colaboraciones y Partnerships", priority: "media",
        recommendations: "Contacta artistas para colaboraciones. Negocia partnerships con venues. Programa content con invitados. Follow up propuestas",
        timeEstimate: "50 min"
      },
      {
        id: "community_response", title: "Gestión Comunidad Global", priority: "alta",
        recommendations: "Responde DMs pendientes en todas las plataformas. Modera comentarios negativos. Agradece menciones y shares",
        timeEstimate: "35 min/día"
      },
      {
        id: "trend_research", title: "Research Tendencias Generales", priority: "media",
        recommendations: "Investiga tendencias en marketing cultural. Analiza hashtags emergentes. Identifica oportunidades seasonales",
        timeEstimate: "30 min"
      }
    ];

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateWeekDates();
    this.renderAllTasks();
    this.updateAllProgress();
  }

  getCurrentWeekDates() {
    const now = new Date();
    const startOfWeek = new Date(now);
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1); // Monday start
    startOfWeek.setDate(diff);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    
    return {
      start: startOfWeek,
      end: endOfWeek
    };
  }

  updateWeekDates() {
    const weekDatesElement = document.getElementById('weekDates');
    const options = { day: 'numeric', month: 'short' };
    const startStr = this.currentWeek.start.toLocaleDateString('es-ES', options);
    const endStr = this.currentWeek.end.toLocaleDateString('es-ES', options);
    weekDatesElement.textContent = `${startStr} - ${endStr}`;
  }

  setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tabName = e.currentTarget.dataset.tab;
        this.switchTab(tabName);
      });
    });

    // Reset week button
    const resetBtn = document.getElementById('resetWeekBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.resetWeek();
      });
    }
  }

  switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) {
      activeTab.classList.add('active');
    }

    // Update content sections
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    const activeContent = document.getElementById(`${tabName}-content`);
    if (activeContent) {
      activeContent.classList.add('active');
    }
  }

  renderAllTasks() {
    // Render platform tasks
    Object.keys(this.platformData).forEach(platform => {
      this.renderPlatformTasks(platform);
    });
    
    // Render general tasks
    this.renderGeneralTasks();
  }

  renderPlatformTasks(platform) {
    const container = document.getElementById(`${platform}-tasks`);
    if (!container) return;
    
    const platformInfo = this.platformData[platform];
    
    container.innerHTML = platformInfo.tasks.map(task => 
      this.createTaskHTML(task, platform)
    ).join('');

    this.attachTaskEventListeners(container);
  }

  renderGeneralTasks() {
    const container = document.getElementById('general-tasks');
    if (!container) return;
    
    container.innerHTML = this.generalTasks.map(task => 
      this.createTaskHTML(task, 'general')
    ).join('');

    this.attachTaskEventListeners(container);
  }

  createTaskHTML(task, platform) {
    const isCompleted = this.taskStates.get(task.id) || false;
    const completedClass = isCompleted ? 'completed' : '';
    const checkedClass = isCompleted ? 'checked' : '';

    return `
      <div class="task-card ${completedClass}" data-task-id="${task.id}">
        <div class="task-header">
          <div class="task-checkbox ${checkedClass}" data-task-id="${task.id}"></div>
          <h3 class="task-title">${task.title}</h3>
        </div>
        
        <div class="task-meta">
          <span class="priority-badge priority-${task.priority}">
            ${task.priority}
          </span>
          <span class="time-estimate">${task.timeEstimate}</span>
        </div>
        
        <div class="recommendations-section">
          <button class="recommendations-toggle" data-task-id="${task.id}">
            <span class="toggle-icon">▶</span>
            Ver recomendaciones
          </button>
          <div class="recommendations-content" data-task-id="${task.id}">
            <p class="recommendations-text">${task.recommendations}</p>
          </div>
        </div>
      </div>
    `;
  }

  attachTaskEventListeners(container) {
    // Task completion checkboxes
    container.querySelectorAll('.task-checkbox').forEach(checkbox => {
      checkbox.addEventListener('click', (e) => {
        const taskId = e.target.dataset.taskId;
        this.toggleTaskCompletion(taskId);
      });
    });

    // Recommendations toggles
    container.querySelectorAll('.recommendations-toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const taskId = e.currentTarget.dataset.taskId;
        this.toggleRecommendations(taskId);
      });
    });
  }

  toggleTaskCompletion(taskId) {
    const currentState = this.taskStates.get(taskId) || false;
    const newState = !currentState;
    this.taskStates.set(taskId, newState);

    // Update UI
    const taskCard = document.querySelector(`[data-task-id="${taskId}"].task-card`);
    const checkbox = document.querySelector(`.task-checkbox[data-task-id="${taskId}"]`);
    
    if (taskCard && checkbox) {
      if (newState) {
        taskCard.classList.add('completed');
        checkbox.classList.add('checked');
      } else {
        taskCard.classList.remove('completed');
        checkbox.classList.remove('checked');
      }
    }

    // Update progress
    this.updateAllProgress();
  }

  toggleRecommendations(taskId) {
    const toggle = document.querySelector(`.recommendations-toggle[data-task-id="${taskId}"]`);
    const content = document.querySelector(`.recommendations-content[data-task-id="${taskId}"]`);
    
    if (!toggle || !content) return;

    const icon = toggle.querySelector('.toggle-icon');

    if (content.classList.contains('show')) {
      content.classList.remove('show');
      toggle.classList.remove('expanded');
      if (icon) icon.textContent = '▶';
      toggle.innerHTML = '<span class="toggle-icon">▶</span> Ver recomendaciones';
    } else {
      content.classList.add('show');
      toggle.classList.add('expanded');
      if (icon) icon.textContent = '▼';
      toggle.innerHTML = '<span class="toggle-icon">▼</span> Ocultar recomendaciones';
    }
  }

  updateAllProgress() {
    // Update platform progress
    Object.keys(this.platformData).forEach(platform => {
      this.updatePlatformProgress(platform);
    });
    
    // Update general tasks progress
    this.updateGeneralProgress();
    
    // Update overall progress
    this.updateOverallProgress();
  }

  updatePlatformProgress(platform) {
    const platformTasks = this.platformData[platform].tasks;
    const completedTasks = platformTasks.filter(task => 
      this.taskStates.get(task.id) || false
    ).length;
    
    const progressPercent = Math.round((completedTasks / platformTasks.length) * 100);
    
    const progressElement = document.getElementById(`${platform}-progress`);
    if (progressElement) {
      progressElement.textContent = `${progressPercent}%`;
    }
  }

  updateGeneralProgress() {
    const completedTasks = this.generalTasks.filter(task => 
      this.taskStates.get(task.id) || false
    ).length;
    
    const progressPercent = Math.round((completedTasks / this.generalTasks.length) * 100);
    
    const progressElement = document.getElementById('general-progress');
    if (progressElement) {
      progressElement.textContent = `${progressPercent}%`;
    }
  }

  updateOverallProgress() {
    const allTasks = [
      ...Object.values(this.platformData).flatMap(platform => platform.tasks),
      ...this.generalTasks
    ];
    
    const completedTasks = allTasks.filter(task => 
      this.taskStates.get(task.id) || false
    ).length;
    
    const progressPercent = Math.round((completedTasks / allTasks.length) * 100);
    
    // Update percentage display
    const progressElement = document.getElementById('overallProgress');
    if (progressElement) {
      progressElement.textContent = `${progressPercent}%`;
    }
    
    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
      progressFill.style.width = `${progressPercent}%`;
    }
  }

  resetWeek() {
    // Clear all task states
    this.taskStates.clear();
    
    // Update week dates to current week
    this.currentWeek = this.getCurrentWeekDates();
    this.updateWeekDates();
    
    // Re-render all tasks to clear completed states
    this.renderAllTasks();
    
    // Update all progress to 0%
    this.updateAllProgress();
    
    // Show success message briefly
    this.showResetMessage();
  }

  showResetMessage() {
    // Remove any existing message
    const existingMessage = document.querySelector('.reset-success-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const message = document.createElement('div');
    message.className = 'reset-success-message';
    message.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--color-success);
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: var(--shadow-lg);
      z-index: 1000;
      font-weight: 500;
      font-size: 14px;
    `;
    message.textContent = '✅ Nueva semana iniciada correctamente';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
      if (message.parentNode) {
        message.remove();
      }
    }, 3000);
  }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CommunityManagerDashboard();
});