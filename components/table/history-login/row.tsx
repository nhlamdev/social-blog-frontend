import { authApi } from "@/api-client/auth";
import { ISession } from "@/interface";
import { formatNumber, getDateTime } from "@/utils/global-func";
import { enqueueSnackbar } from "notistack";

interface ISessionRow {
  item: ISession;
  reload: () => void;
}

export const SessionRow = (props: ISessionRow) => {
  const { item, reload } = props;
  return (
    <tr
      className="border-b border-gray-200
  dark:hover:bg-gray-600 hover:bg-gray-100 hover:bg-opacity-40"
    >
      <td className="py-3 px-6">
        <div className="flex flex-col">
          <span className="font-medium w-full block text-left lg:text-sm text-xs whitespace-nowrap">
            {item.browser}
          </span>
          <span className="font-medium w-full block text-left lg:text-sm text-xs whitespace-nowrap">
            {item.os}
          </span>
        </div>
      </td>
      <td className="py-3 px-6">
        <span className="font-medium w-full block text-center lg:text-sm text-xs whitespace-nowrap">
          {getDateTime(item.created_at)}
        </span>
      </td>
      <td className="py-3 px-6">
        <span className="font-medium w-full block text-center lg:text-sm text-xs whitespace-nowrap">
          {item.device}
        </span>
      </td>
      <td className="py-3 px-6">
        <span className="font-medium w-full block text-center lg:text-sm text-xs whitespace-nowrap">
          {item.provider}
        </span>
      </td>
      <td className="py-3 px-6 text-center">
        {item.isCurrent ? (
          <span
            className="font-medium block text-center lg:text-sm text-xs whitespace-nowrap select-none
          px-4 py-2 bg-slate-200 bg-opacity-20 w-fit mx-auto rounded-md shadow-md"
          >
            Hiện tại
          </span>
        ) : (
          <button
            onClick={() =>
              authApi
                .forceLogout(item._id)
                .then(() => {
                  reload();
                })
                .catch((error) => {
                  if (Array.isArray(error?.response?.data?.message)) {
                    error?.response?.data?.message.forEach((item: any) => {
                      enqueueSnackbar(item, { variant: "error" });
                    });
                  } else {
                    enqueueSnackbar(
                      error?.response
                        ? error.response.data?.message
                        : error.message,
                      { variant: "error" }
                    );
                  }
                })
            }
            type="button"
            className="focus:outline-none text-slate-100 bg-rose-400 hover:bg-rose-500 
          focus:ring-rose-300 font-medium rounded-md text-xs px-4 py-2 
          dark:focus:ring-rose-900 focus:ring-4"
          >
            Đăng xuất
          </button>
        )}
      </td>
    </tr>
  );
};
