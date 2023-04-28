import AddCategory from "../../components/AddCategory";
import { shallow }from 'enzyme';
import '@testing-library/jest-dom';
describe('Test in AddCategory', () => { 

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( ()=> {
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should be show successfully', () => { 
        expect(wrapper).toMatchSnapshot();
     });


     test('should be change inputBox', () => {

       const value = "Hola Mundo";
        const input = wrapper.find('input');
        input.simulate('change',{target: {value}});
        const paragraph = wrapper.find('p');
        
        expect(paragraph.text().trim()).toBe(value);
      })




      test('should not post the information with submit', () => { 

          wrapper.find('form').simulate('submit', {preventDefault(){}});
          
          expect(setCategories).not.toHaveBeenCalled();
       })


 })