import { renderHook } from '@testing-library/react';
import {useFetchGifs} from '../../hooks/useFetchGifs';

describe('Test in Hook useFetchGifs', () => {


    test('should return initial state', () => {
        
        const { result}  = renderHook( () => useFetchGifs('One Punch') );
        
        const {data, loading} = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
})