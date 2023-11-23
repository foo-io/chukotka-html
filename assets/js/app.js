const { createApp, ref } = Vue;
const VueMultiselect = window["vue-multiselect"].default;

document.addEventListener("DOMContentLoaded", () => {
  MicroModal.init({
    disableFocus: true,
    disableScroll: true,
  });

  tippy("[data-tippy-content]", {
    theme: "custom",
    placement: "right",
    offset: [0, 20],
    allowHTML: true,
  });

  var inputs = document.querySelectorAll(".form-item-file-input");
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.parentElement,
      labelVal = label.innerHTML;

    input.addEventListener("change", function (e) {
      var fileName = "";
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute("data-multiple-caption") || "").replace(
          "{count}",
          this.files.length
        );
      else fileName = e.target.value.split("\\").pop();

      if (fileName) {
        label.querySelector("span.form-item-input").innerText = fileName;
      } else label.innerHTML = labelVal;
    });
  });
});
const app = createApp({
  components: { VueMultiselect, Datepicker: VueDatePicker },
  setup() {
    const isVisiblePersonalButton = ref(false);
    const message = ref("Hello vue!");
    const isVisibleMobileMenu = ref(false);
    const isVisibleNavigation = ref(null);
    const isVisibleNotify = ref(null);
    const isMainPageAccordionSelected = ref(1);
    const isShowPassword = ref(false);
    const datepicked = ref(null);
    const selectedSwitcher = ref(1);

    // forms models
    const formAuth = ref({
      login: null,
      password: null,
    });
    const formRegisterPersonal = ref({
      password: null,
    });

    // feedback selectors
    const optionsThemes = ref([
      {
        id: 0,
        name: "Личный кабинет",
      },
      {
        id: 1,
        name: "Жалоба",
      },
      {
        id: 2,
        name: "Вопрос",
      },
    ]);
    const valueTheme = ref(null);

    // payments selectors
    const optionsPayment = ref([
      {
        id: 0,
        name: "Посмотреть все",
      },
      {
        id: 1,
        name: "Начисления",
      },
      {
        id: 2,
        name: "Оплаты",
      },
    ]);
    const valuePayment = ref(null);

    // remove lcs selectors
    const optionsLCs = ref([
      {
        id: 0,
        name: "Лицевой счет №123456",
      },
      {
        id: 1,
        name: "Лицевой счет №654321",
      },
    ]);
    const valueLC = ref(null);

    const showMenu = () => {
      isVisibleMobileMenu.value = !isVisibleMobileMenu.value;
      if (isVisibleMobileMenu.value) {
        document.querySelector("body").classList.add("overflow-scroll-off");
      } else {
        document.querySelector("body").classList.remove("overflow-scroll-off");
      }
    };

    const showPassword = () => {
      isShowPassword.value = !isShowPassword.value;
    };

    const openMenu = (index) => {
      if (index === isVisibleNavigation.value) {
        isVisibleNavigation.value = null;
        return;
      }

      isVisibleNavigation.value = index;
    };

    const openMainPageAccordion = (index) => {
      if (index === isMainPageAccordionSelected.value) {
        isMainPageAccordionSelected.value = null;
        return;
      }

      isMainPageAccordionSelected.value = index;
    };

    const handleDemo = (index) => {
      console.log("edit input by id:", index);
      document.querySelector(`#${index}`).toggleAttribute("disabled");
    };

    const openSpoiler = (index) => {
      if (index === isVisibleNotify.value) {
        isVisibleNotify.value = null;
        return;
      }

      isVisibleNotify.value = index;
    };

    return {
      message,
      isVisiblePersonalButton,
      isVisibleMobileMenu,
      isVisibleNavigation,
      isVisibleNotify,
      isMainPageAccordionSelected,
      isShowPassword,
      selectedSwitcher,
      datepicked,
      formAuth,
      formRegisterPersonal,
      optionsPayment,
      optionsLCs,
      optionsThemes,
      valueLC,
      valueTheme,
      showMenu,
      showPassword,
      openMenu,
      openSpoiler,
      openMainPageAccordion,
      handleDemo,
      valuePayment,
    };
  },
});

app.mount("#app");
