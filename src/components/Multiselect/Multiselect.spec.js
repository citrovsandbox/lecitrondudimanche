import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Multiselect from './Multiselect.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Multiselect.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      actions,
      state:{
        users:{
          users:[],
          usersLeft:[]
        }
      }
    });
  })

  it('should render a multiselect component', () => {
    const wrapper = shallowMount(Multiselect, {
      computed:{
        tagsAreFilled:0,
        usersByName:[],
        usersLeft:[],
        usersSelected:[]
      }
    });

    const tagLineContainer = wrapper.find('#tagLineContainer');
    const tagLine = wrapper.find('#tagLine');
    const tagContainer = wrapper.find('#tagContainer');

    const filterInputContainer = wrapper.find('#filterInputContainer');
    const autocomplete = wrapper.find('#autocomplete');
    const filterInput = wrapper.find('#filterInput');

    const tagLineStateIndicator = wrapper.find('#tagLineStateIndicator');
    const selectIcon = wrapper.find('#selectIcon');

    const choiceList = wrapper.find('#choiceList');

    expect(wrapper).toBeDefined();
    expect(tagLineContainer).toBeDefined();
    expect(tagLine).toBeDefined();
    expect(tagContainer).toBeDefined();
    expect(filterInputContainer).toBeDefined();
    expect(autocomplete).toBeDefined();
    expect(filterInput).toBeDefined();
    expect(tagLineStateIndicator).toBeDefined();
    expect(selectIcon).toBeDefined();
    expect(choiceList).toBeDefined();
    
    // console.log(tagLineContainer);
    // expect(tagLineContainer).toBe('<div>');
    // expect(tagLine).toBe('<div>');
    // expect(tagContainer).toBe('div');
    // expect(filterInputContainer).toBe('div');
    // expect(autocomplete).toBe('div');
    // expect(filterInput).toBe('input')
    // expect(tagLineStateIndicator).toBe('div');
    // expect(selectIcon).toBe('img');
    // expect(choiceList).toBe('div');
  });
});
