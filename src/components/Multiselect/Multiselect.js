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
      isSelecting:false,
      filterVal:"",
      autoComplete:"",
      store:this.$store
    }
  },

  watch:{
    options:function (val) {
      this.$store.commit('set:usersLeft', val);
    },
    filterVal (val) {
      this._filterChoices(val);
      this._autoComplete(val);
    }
  },

  computed: {
    tagsAreFilled() {
      return this.usersSelected.length > 0 ? true : false;
    },
    usersByName () {
      let aOptions = this.usersLeft;
      aOptions.sort((a, b) => {
        if(a.username < b.username) { return -1; }
        if(a.username > b.username) { return 1; }
        return 0;
      });
      return aOptions;
    },
    usersLeft: {
      get:function () {
        return this.$store.state.users.usersLeft;
      },
      set(newVal) {
        return this.$store.commit("set:usersLeft", newVal);
      }
    },
    usersSelected: {
      get:function () {
        return this.$store.state.users.usersSelected;
      },
      set(newVal) {
        return this.$store.commit("set:usersSelected", newVal);
      }
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
      this.usersLeft.splice(context.index, 1);
      this.usersSelected.push(context.user);
      this._autoComplete(this.filterVal);
    },
    onDeleteTag (context) {
      this.usersSelected.splice(context.index, 1)
      this.usersLeft.push(context.tag);
      this._autoComplete(this.filterVal);
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
      let aUsers = this.usersLeft;
      if(sAutocomplete !== "") {
        let oSuggestedUser = aUsers.find(user => user.username = sAutocomplete);
        let iSuggestedUserIndex = aUsers.findIndex(user => user.username = sAutocomplete);
        this.usersSelected.push(oSuggestedUser);
        this.usersLeft.splice(iSuggestedUserIndex, 1);
      }
      this.autoComplete = "";
      this.filterVal = "";
      
    },
    onEnterPress () {
      if(this.usersLeft[0]) {
        this.usersSelected.push(this.usersLeft[0]);
        this.usersLeft.splice(0,1);
        this.autoComplete = "";
      }
    },
    onSmallArrowPress () {
      this.isSelecting = !this.isSelecting;
    },
    /**
     * Private methods
     */
    _filterChoices (val) {
      let aUsers = this.options;
      let aTags = this.usersSelected.map(element => element.username);
      this.usersLeft = aUsers.filter(user => user.username.toLowerCase().includes(val.toLowerCase())).filter(user => !aTags.includes(user.username));
    },
    _autoComplete (val) {
      if(val !== "") {
        let aUsers = this.usersLeft;
        let oSuggestedUser = aUsers.find(user => user.username.startsWith(val));
        if(oSuggestedUser) {
          this.autoComplete = oSuggestedUser.username;
          return;
        } 
        else {
          this.autoComplete = "";
        }
      } else {
        this.autoComplete = "";
      }
    }
  }
};
