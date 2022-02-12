import { atom } from "recoil";

type RewardOrderType = {
  rewardId: number; 
  userId: number;
  projectId: number;
  quantity: number;
  optionContent: string;
  recipientName: string;
  recipientTel: string;
  recipientAddress: string;
  requestContent: string;
  amount: number;
};


export const rewardOrderState = atom<RewardOrderType>({
  key: "rewardOrderDtddo",
  default: {
    rewardId: 0,
    userId: 0,
    projectId: 0,
    quantity: 0,
    optionContent: "",
    recipientName: "",
    recipientTel: "",
    recipientAddress: "",
    requestContent: "",
    amount: 0
  },
});
