import { shallow }from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';

describe('Test in GifExpert App',() => {

    let wrapper = shallow(<GifExpertApp />)

    test('It should show up correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('a list of categories should be displayed', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defaultCategory={categories}/>);

        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})