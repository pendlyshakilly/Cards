import { instance } from "common/api/common.api";



export const packsApi = {
		getPacksWithParam: (arg: any) => {
						return instance.get(`cards/pack?${arg}`);
		},
		getDefaultPacks: () => {
               return instance.get('cards/pack')
		}
};