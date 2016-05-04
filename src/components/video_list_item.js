import React, { Component } from 'react';

export default class VideoListItem extends Component {
	render() {
		return (
			<li onClick={() => this.props.onVideoSelect(this.props.video)} className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img src={this.props.video.snippet.thumbnails.default.url} alt="" className="media-object"/>
					</div>

					<div className="media-body">
						<div className="media-heading">{this.props.video.snippet.title}</div>
					</div>
				</div>
			</li>
		)
	}
}
