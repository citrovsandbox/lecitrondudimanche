import UserItem from '../UserItem/UserItem.vue';
import Tag from '../Tag/Tag.vue';

export default {
  name: 'Multiselect',

  components:{UserItem, Tag},
  props: {
    options:{type:Array, default:[]}
  },

  data () {
    return {
      persons:[...this.options],
      isSelecting:false,
      tags:[],
      filterVal:"",
      autoComplete:""
    }
  },

  watch:{
    options:function (val) {
      this.persons = val;
    },
    filterVal (val) {
      this._filterChoices(val);
      this._autoComplete(val);
    }
  },

  computed: {
    tagsText () {
      return this.tags.length === 0 ? "Cliquez pour choisir" : ""
    },
    tagsAreFilled() {
      return this.tags.length > 0 ? true : false;
    },
    personsByName () {
      let aOptions = this.persons;
      aOptions.sort((a, b) => {
        if(a.username < b.username) { return -1; }
        if(a.username > b.username) { return 1; }
        return 0;
      })
      return aOptions;
    }
  },

  methods:{
    /**
     * Public methods (handlers)
     */
    onTagLineClick () {
      this.isSelecting = !this.isSelecting;
    },
    onUserItemSelected (context) {
      let aUsers = this.persons;
      aUsers.splice(context.index, 1);
      this.persons = aUsers;
      this.tags.push(context.user);
    },
    onDeleteTag (context) {
      let aTags = this.tags;
      aTags.splice(context.index, 1);
      this.tags = aTags;
      this.persons.push(context.tag);
    },
    onInputFocus () {
      this.isSelecting = !this.isSelecting;
    },
    onInputLeave (el) {
      setTimeout(() => {
        this.isSelecting = !this.isSelecting;
      }, 200);
    },
    onTabPress () {
      let sAutocomplete = this.autoComplete;
      let aUsers = this.persons;
      let aNewPersons = [];
      if(sAutocomplete !== "") {
        for(var i in aUsers) {
          if(aUsers[i].username === sAutocomplete) {
            this.tags.push(aUsers[i]);
          } else {
            aNewPersons.push(aUsers[i]);
          }
        }
        this.persons = aNewPersons;
        this.autoComplete = "";
        this.filterVal = "";
      }
    },
    onEnterPress () {
      this.tags.push(this.persons[0]);
      this.persons.splice(0,1);
      this.autoComplete = "";
    },
    onSmallArrowPress () {
      this.isSelecting = !this.isSelecting;
    },
    /**
     * Private methods
     */
    _filterChoices (val) {
      let aUsers = this.options;
      let aTags = this.tags.map(element => element.username);

      aUsers = aUsers.filter(user => user.username.toLowerCase().includes(val.toLowerCase())).filter(user => !aTags.includes(user.username));
      this.persons = aUsers;
    },
    _autoComplete (val) {
      if(val !== "") {
        let aUsers = this.persons;
        for(var i in aUsers) {
          if(aUsers[i].username.startsWith(val)) {
            this.autoComplete = aUsers[i].username;
            return;
          }
        }
      }
      this.autoComplete = "";
    }
  }
};
