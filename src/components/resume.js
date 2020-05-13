import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component{
    render() {
        return(
            <div class="back1">
            <img
            src="https://i.ibb.co/v1gyWNg/4ca78182b852165aa4020dc59f71b27b-0.jpg"
            alt="resumeimg"
            class="center2"
            />
			<img
            src="https://i.ibb.co/wKVK80K/4ca78182b852165aa4020dc59f71b27b-1.jpg"
            alt="resumeimg"
            class="center2"
            />
            </div>
        )

        
    }
}
export default Resume;
