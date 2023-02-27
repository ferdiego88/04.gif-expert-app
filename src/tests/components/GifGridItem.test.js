import { shallow }from 'enzyme'
import React from 'react';
import GifGridItem from "../../components/GifGridItem";

describe('Expects <GifGridItem />', () => {

    const title = 'GifGridItem titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url}/>);


    test('should be to show <GifGridItem /> successfully', () => { 


        expect(wrapper).toMatchSnapshot();
     })

     test('should be a paragraph with the title', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
     })

     test('should have a image and url equals to props', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

      })

      test('should be have animate__fadeIn', () => {

            const fadeIn = 'animate__fadeIn';
            const div = wrapper.find('div');
            
            expect(div.prop('className')).toContain(fadeIn);
       })
})