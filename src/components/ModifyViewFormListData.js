
export const ModifyViewFormListData = (data) => {
    const result = []
    const categoryList = []
    data.forEach(e => categoryList.push(e.category))
    const unicumCategoryList = [...new Set(categoryList)];
    unicumCategoryList.forEach(e => {
        const filteredList = data.filter(el => el.category === e)
        result.push({
            category: e,
            data: filteredList,
        })
    })
    return result
}


