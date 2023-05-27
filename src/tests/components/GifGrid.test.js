
import GifGrid from '../../components/GifGrid';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests in GifGrid', () => {

    const category = 'One punch';
    

    test('should display correctly', () => { 
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        
     })


     test('should show items when the images are loaded useFetchGifs', () => {

        const gifs = [
            {
            id: 'ABC',
            url: 'https://www.images.com/bebe.jpg',
            title: 'Gianluca Bebe'
            },
            {
            id: '123',
            url: 'https://www.images.com/bebe.jpg',
            title: 'Gianluca Bebe'
            },
    ];

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

      })
 })