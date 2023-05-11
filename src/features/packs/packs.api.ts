import { instance } from "common/api/common.api";


export const packsApi = {
		getDefaultPacks: (arg: any) => {
						return instance.get('cards/pack', {params: arg});

		}
};