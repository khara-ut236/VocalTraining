import {  
    combineReducers,
    createStore,
} from 'redux';
  
// actions.js
// actionはオブジェクトを作る
export const movePage = (name) => ({  
    type: 'PAGE_NAME',
    name: name
});

// reducers.js
// actionで生成されたオブジェクトを受け取り、巨大なjsonを書き換える関数
const reducer = (state = { name: 'menu' }, action) => {  
    switch (action.type) {
        case 'PAGE_NAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}
  
export const reducers = combineReducers({  
    user: reducer
})
  
// store.js
// jsonデータ
export const store = createStore(reducers)
