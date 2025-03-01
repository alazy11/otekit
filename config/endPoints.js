import appConfig from "./app.config";

const endPoints = {
    seo: {
        getSeo:appConfig.backEndUri + "/seo",
        editSeo: (key)=> appConfig.backEndUri + `/seo?seo_key=${key}`,
        setSeo:appConfig.backEndUri + "/seo",
        checkExistingKey: (key)=> appConfig.backEndUri + `/seo/checkExistingKey?key=${key}`,
    },
    content: {
        getContent:appConfig.backEndUri + "/content",
        editContent: (key)=> appConfig.backEndUri + `/content?content_key=${key}`,
        setContent:appConfig.backEndUri + "/content",
        checkExistingKey: (key)=> appConfig.backEndUri + `/content/checkExistingKey?key=${key}`,
    },
    media: {
        getMedia:appConfig.backEndUri + "/media",
        getMediaInfo: (id)=> appConfig.backEndUri + `/media/info?id=${id}`,
        editMedia: (key)=> appConfig.backEndUri + `/media?media_key=${key}`,
        setMedia:appConfig.backEndUri + "/media",
        uploadMedia:appConfig.backEndUri + "/media/upload",
        checkExistingKey: (key)=> appConfig.backEndUri + `/media/checkExistingKey?key=${key}`,
        toggleActive: (key,status)=> appConfig.backEndUri + `/media/status?media_key=${key}&status=${status}`,
    },
    team: {
        getTeam:appConfig.backEndUri + "/team",
        getTeamInfo: (id)=> appConfig.backEndUri + `/team/info?id=${id}`,
        editTeam: (id)=> appConfig.backEndUri + `/team?id=${id}`,
        setTeam:appConfig.backEndUri + "/team",
        uploadTeam:appConfig.backEndUri + "/team/upload",
        checkExistingKey: (id)=> appConfig.backEndUri + `/team/checkExistingKey?id=${id}`,
        toggleActive: (key,status)=> appConfig.backEndUri + `/team/status?media_key=${key}&status=${status}`,
    },
    pages: {
        getPages:appConfig.backEndUri + "/pages",
    }
};

export default endPoints;