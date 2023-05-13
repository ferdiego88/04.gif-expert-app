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


       test('should call setCategories and clear the textBox', () => { 

          //1. simular el inputChange.
          const value = "Hola cajita";
          const input = wrapper.find('input');
          input.simulate('change',{target:{value}});
          
          //2. Simular el submit.
          wrapper.find('form').simulate('submit',{preventDefault(){}});
          
          
          //3. setCategories se debe haber llamado
          expect(setCategories).toHaveBeenCalledTimes(1);

          //Se espera que setCategories debe de ser una Funcion
          expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
          //4. el valor del input debe de estar vacio
          expect(wrapper.find('input').prop('value')).toBe('');


        })


 })