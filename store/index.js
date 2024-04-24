export const state = () => ({
    pageName: 'Dashboardsss'
  })
  
export const getters = {
    pageNameGetter(state){
        return state.pageName
    }
}
  
export const mutations = {
    udpateHeaderTitle(state,pageName){
        state.pageName = pageName
        console.log('enterd anotherpage')
    }
}

export const actions = {

}