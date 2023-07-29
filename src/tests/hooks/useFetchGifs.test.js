import { renderHook } from '@testing-library/react-hooks';
import {useFetchGifs} from '../../hooks/useFetchGifs';

describe('Test in Hook useFetchGifs', () => {


    test('should return initial state',async () => {
        
        const { result, waitForNextUpdate}  = renderHook( () => useFetchGifs('One Punch') );
        
        const {data, loading} = result.current;

        //await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('should return images array and loading false',async  () => {

        const { result, waitForNextUpdate}  = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();
        console.log(result)
        const {data, loading} = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
})