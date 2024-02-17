function createPlaylistTableRelation(listOfPlaylistId, videoId) {
  listOfPlaylistId.reduce((eachId, accum) => {
    const playList_video_obj = {};
    playList_video_obj[eachId] = videoId;
    accum.push(playList_video_obj);
  }, []);
}

export default createPlaylistTableRelation;
