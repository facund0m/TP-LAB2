new Vue({
    el: '#app',
    data: {
      newGame: {
        name: '',
        platform: '',
        status: '',
        score: ''
      },
      games: [],
      selectedGame: null,
      errors: {}
    },
    methods: {
      registerGame() {
        this.errors = {};
        if (!this.newGame.name.trim()) {
          this.errors.name = 'El nombre es requerido';
        }
        if (!this.newGame.platform) {
          this.errors.platform = 'La plataforma es requerida';
        }
        if (!this.newGame.status) {
          this.errors.status = 'El estado es requerido';
        }
        if (this.newGame.score && (isNaN(this.newGame.score) || this.newGame.score < 1 || this.newGame.score > 10)) {
          this.errors.score = 'El puntaje debe estar entre 1 y 10';
        }
        if (Object.keys(this.errors).length === 0) {
          this.games.push({
            name: this.newGame.name,
            platform: this.newGame.platform,
            status: this.newGame.status,
            score: this.newGame.score
          });
          this.newGame = {
            name: '',
            platform: '',
            status: '',
            score: ''
          };
        }
      },
      showDetails(game) {
        this.selectedGame = game;
        this.openModal();
      },
      openModal() {
        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
      },
      closeModal() {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
      }
    }
  });
  