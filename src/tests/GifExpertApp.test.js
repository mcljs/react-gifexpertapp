import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp'


describe('Prueba en <GifExpertApp/>', () => {

    test('se debe mostrar correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una Lista de Categorias', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
    
})
