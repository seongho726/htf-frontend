import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  },
  created() {
    this.chartInterval = setInterval(() => {
      this.$data._chart.update()
    }, 2000);
  },
  destroyed() {
    clearInterval(this.chartInterval);
  },
  // watch: {
  //   chartData: function() {
  //     this.$data._chart.update();
  //   }
  // }
}