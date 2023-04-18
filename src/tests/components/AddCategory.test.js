import AddCategory from "../../components/AddCategory";
import { shallow }from 'enzyme';
describe('Test in AddCategory', () => { 

    const setCategories = ()=> {};
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

    test('should be show successfully', () => { 
        expect(wrapper).toMatchSnapshot();
     });


     test('should be change inputBox', () => {

        const input = wrapper.find('input');
        const value = "Hola Mundo";
        input.simulate('change',{target: {value}});
        const paragraph = wrapper.find('p');
        
        expect(paragraph.text().trim()).toBe(value);
      })
 })