import UserItem from '../UserItem/UserItem.vue';
import Tag from '../Tag/Tag.vue';

export default ({
  name: 'Multiselect',
  components:{UserItem, Tag},
  props: {
    options:{type:Array, default:() => []}
  },
  data() {
    return {
      isSelecting:false,
      tags:[],
      users:this.options
    };
  },
  computed: {
    tagsText () {
      return this.tags.length === 0 ? "Cliquez pour choisir" : ""
    },
    optionsByName () {
      let aOptions = this.options;
      aOptions.sort((a, b) => {
        if(a.username < b.username) { return -1; }
        if(a.username > b.username) { return 1; }
        return 0;
      })
      return aOptions;
    }
  },
  beforeMount () {
    console.log(this.options);
  },
  methods:{
    onTagLineClick () {
      this.isSelecting = !this.isSelecting;
    },
    onUserItemSelected (option) {
      let aOptions = this.options;
      let aNewOptions = [];
      for (let i in aOptions) {
        if(aOptions[i].username !== option.username) {
          aNewOptions.push(aOptions[i]);
        }
      }
      this.options = aNewOptions;
      this.tags.push(option);
    },
    onDeleteTag (option) {
      let aTags = this.tags;
      let aNewTags = [];
      for (let i in aTags) {
        if(aTags[i].username !== option.username) {
          aNewTags.push(aTags[i]);
        }
      }
      this.tags = aNewTags;
      this.options.push(option);
    }
  }
});
