import {readContract} from "@wagmi/core";
import {getConfig} from "@/wagmi";
import {abi, CONTRACT_ADDRESS} from "@/constants";
import {useWriteContract} from "wagmi";


// export const usePurchaseItem = async (sellerAddress: string, item: string, price: bigint) => {
//   const { writeContractAsync } = useWriteContract();
//   await writeContractAsync(
//       {
//         abi,
//         address: CONTRACT_ADDRESS,
//         functionName: "purchaseItem",
//         args: [
//           sellerAddress,
//           item
//         ],
//         value: price
//       }
//   );
// };

