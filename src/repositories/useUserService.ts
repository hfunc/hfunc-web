import {axiosUtil} from "@/utils";

interface UserInfo {
    id: string
    avatar: string
    username: string
    nickname: string
    createTime: string
}

export const useUserService = () => {

    const fetchUserInfo = () => {
        return axiosUtil.get<UserInfo>("/api/v1/user_service/userinfo", {})
    }
    const putUserInfo = () => {
        return axiosUtil.put<UserInfo>("/api/v1/user_service/userinfo", {})
    }
    const postUserInfo = () => {
        return axiosUtil.post<UserInfo>("/api/v1/user_service/userinfo", {})
    }

    return {
        fetchUserInfo,
        putUserInfo,
        postUserInfo,
    }
}