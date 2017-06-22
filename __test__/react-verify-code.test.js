/**
 * Created by liurunbin on 2017/6/21.
 */
import React from 'react'
import ReactVerifyCode from '../src/react-verify-code';
import { shallow } from 'enzyme';
describe('ReactVerifyCode suite',()=>{
    it('should render without throwing an error',()=>{
        let wrapper = shallow(<ReactVerifyCode />)
        expect(wrapper.find('canvas').length).toEqual(1)
    })


})