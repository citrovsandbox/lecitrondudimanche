export default ({
  name: 'Tag',
  props: {
    tag:{type:Object, default:{}},
    index:{type:Number}
  },
  data() {
    return {
      isSelecting:false
    };
  },
  methods:{
    onTagExitPress () {
      this.$emit("delete", {tag:this.tag, index:this.index});
    }
  }
});
