var app = new Vue({
  el: "#app",
  data: {
    checkPhotographType: "picture", //撮影タイプ
    settingModalVisible: false, // モーダル
    settingModalBgVisible: false, //モーダル背景色（薄黒）
    status: "",
  },
  methods: {
    showSettingModal: function () {
      this.settingModalVisible = true;
      this.settingModalBgVisible = true;
    },
    closeSettingModal: function () {
      this.settingModalVisible = false;
      this.settingModalBgVisible = false;
    },
    cancelEvent: function () {
      event.stopPropagation();
    },
    shoot: function (event) {


      alert('shoot');

      const img = new Image();
      img.src = URL.createObjectURL("http://localhost:8080/?action=stream");
      const mat = cv.imread(img);
      cv.imshow("output-canvas", mat);
      //mat.delete();

    },
    shiftLeft: function (event) {
      alert("shift to left!");
    },
    shiftRight: function (event) {
      alert("shift to right!");
    },
  },
});
