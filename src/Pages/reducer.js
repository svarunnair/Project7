
import {GET_DATA_FAILURE,GET_DATA_REQUIEST,GET_DATA_SUCCESS} from "./action"


const initstate={
    iserror:false,
    isloading:false,
    data:[]
}

export const reducer=(state=initstate,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST :
            return({
                ...state,
                iserror:false,
                isloading:true
            })
            
            case GET_DATA_SUCCESS :
                return({
                    ...state,
                    iserror:false,
                    isloading:false
                })
                case GET_DATA_FAILURE :
                    return({
                        ...state,
                        iserror:true,
                        isloading:false

                    })


                    default :
                    return({
                        ...state
                    })
    }
}