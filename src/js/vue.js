const App = {
  data() {
    return {
      choicedConverter: [],
      converterName: "Конвертор PDF",
      converterIcon: "#file",
      converterBtn: "converter",
      converterDescription: "Легко конвертируйте файлы формата PDF",
      isActive: false,
      isFadeIn: false,
      isBigInp: false,
      converters: [
        {
          name: "Конвертор PDF",
          description: "Легко конвертируйте файлы формата PDF",
          icon: "#file",
          btn: "converter",
        },
        {
          name: "Парсер PDF",
          description:
            "Парсинг PDF документа для извлечения текста и изображений. Разбор PDF на текст и изображения.",
          icon: "#analysis",
          btn: false,
        },
        {
          name: "Сжатие PDF",
          description:
            "Сжать и оптимизировать PDF файлы онлайн, просто и быстро",
          icon: "#compress",
          btn: "compress",
        },
        {
          name: "Удаление страниц",
          description: "Удалить страницы из документа PDF Онлайн",
          icon: "#delete",
          btn: "delete",
        },
        {
          name: "Редактирование PDF",
          description: "Редактирование PDF документов онлайн",
          icon: "#edit-button",
          btn: false,
        },
        {
          name: "Разделение PDF",
          description: "Разделить PDF файл на отдельные части онлайн",
          icon: "#resize",
          btn: "resize",
        },
        {
          name: "Объединение PDF",
          description:
            "Простой способ соединить PDF файлы в один без ограничений",
          icon: "#merge",
          btn: "converter",
        },
      ],
    };
  },
  beforeCreate() {},
  created() {},
  computed: {},
  mounted() {
    this.choicedConverter = this.converterName;
  },
  computed: {},
  methods: {
    filter(m) {
      this.choicedConverter = this.converters.filter((c) => {
        return c.name.indexOf(m) > -1;
      });

      this.converterName = this.choicedConverter[0].name;
      this.converterIcon = this.choicedConverter[0].icon;
      this.converterDescription = this.choicedConverter[0].description;
      this.converterBtn = this.choicedConverter[0].btn;

      this.isActive = true;
      this.isFadeIn = true;

      if (this.converterName == "Разделение PDF") {
        setTimeout(() => {
          this.isBigInp = true;
        }, 1500);
      } else {
        this.isBigInp = false;
      }

      if (this.isActive === true) {
        setTimeout(() => {
          this.isActive = false;
        }, 2000);
      }

      if (this.isFadeIn === true) {
        setTimeout(() => {
          this.isFadeIn = false;
        }, 150);
      }
    },
  },
  watch: {},
};

const converter = Vue.createApp(App);
converter.mount("#app");
