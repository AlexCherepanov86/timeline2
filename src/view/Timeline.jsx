import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import React, { Component } from 'react';
import ModalView from './Modal';
import { connect } from 'react-redux';

class Timeline extends Component {

    render() {
        const {user} = this.props.user;
        const {room} = this.props.room;
        return(
        <VerticalTimeline
            //layout= "1-column"
        >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: 'rgb(33, 150, 243)', color: '#000'}}
                contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                date={ user.time }
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">{ user.position }</h3>
                <h4 className="vertical-timeline-element-subtitle">{ user.name } { user.surname }</h4>
                <p>
                    Room#{room.number} booking
                </p>
                <button>delete</button>
                <ModalView/>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: 'rgb(255,109,117)', color: '#000000'}}
                contentArrowStyle={{borderRight: '7px solid  rgb(255,109,117)'}}
                date="2010 - 2011"
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                // icon={<StarIcon />}
            />
            <button className="new btn-success">NEW</button>
        </VerticalTimeline>

        );
    }

}

function mapStateToProps(state) {
    const {user, room} = state;
    // const {user} = user;
    // const {room} = room;
    return {
        user,
        room
    }
}

const connectedTimeline = connect(mapStateToProps)(Timeline);
export default connectedTimeline;