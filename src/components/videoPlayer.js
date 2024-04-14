import React, { Component } from "react";
import screenfull from "screenfull";
import ReactPlayer from "react-player/youtube";

class VideoPlayer extends Component {
  state = {
    playing: false,
    volume: 0.8,
    muted: false,
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleStop = () => {
    this.setState({ playing: false });
  };

  handleVolumeChange = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  handleClickFullscreen = () => {
    screenfull.request(document.querySelector(".react-player"));
  };

  render() {
    const { playing, volume, muted } = this.state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            overflow: "hidden",
            backgroundColor: "black",
          }}
        >
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=7QHNC4YBAYo"
            playing={playing}
            volume={volume}
            muted={muted}
            width="100%"
            height="100%"
            controls={false}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
            }}
          />
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              margin: "0 10px",
              fontSize: "16px",
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={this.handleStop}
          >
            Stop
          </button>
          <button
            style={{
              margin: "0 10px",
              fontSize: "16px",
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={this.handlePlayPause}
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            style={{
              margin: "0 10px",
              fontSize: "16px",
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={this.handleClickFullscreen}
          >
            Fullscreen
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={this.handleVolumeChange}
            style={{
              margin: "0 10px",
            }}
          />
          <button
            style={{
              margin: "0 10px",
              fontSize: "16px",
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={this.handleToggleMuted}
          >
            {muted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;



  