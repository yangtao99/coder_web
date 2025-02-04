// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    gender: string;
    phone: string;
    email: string;
    userStatus: number;
    creatTime: Date;
    userRole: number;
    // name?: string;
    // avatar?: string;
    // userid?: string;
    // email?: string;
    // signature?: string;
    // title?: string;
    // group?: string;
    // tags?: { key?: string; label?: string }[];
    // notifyCount?: number;
    // unreadCount?: number;
    // country?: string;
    // access?: string;
    // geographic?: {
    //   province?: { label?: string; key?: string };
    //   city?: { label?: string; key?: string };
    // };
    // address?: string;
    // phone?: string;
  };

  export interface Params {
    userID: string;
  }
  type commentValue={
    id?:number
    auctionID?: string,
    username: string,
    userAvatar: string,
    content?: string,
    price?: string,
  }

  type AuctionBag = {
    id: ?string;
    username: ?string;
    userID:?string;
    auctionID:?string;
    auctionName: ?string;
//  avatar: string;
//  cover: string;
    // status: 'normal' | 'exception' | 'active' | 'success';
//  percent: number;
    // logo: string;
    //href: string;
//  body?: any;
    // updatedAt: number;
    auctionMesUrl: ?string;
    auctionImageUrl:? string;
//    createdAt: number;
    auctionDescription: ?string;
//  description: string;
//  activeUser: number;
//  newUser: number;
//  star: number;
//  like: number;
//  message: number;
    //content: string;
    // members: Member[];
  }

  type ArticleListContentProps = {
    data: {
      auctionDescription: string;
//      createdAt: number;
//    avatar: string;
//       auctionMesUrl: string;
//       auctionImageUrl: string;
      username: string;
    };
  };

  type AuctionMessage = {
    auctionName: ?string
    auctionDescription: ?string
    auctionMesUrl: ?string
    id: ?string
    auctionImageUrl: ?string
    auctionMoney: ?string
    auctionAddMoney: ?string
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type RegisterResult = number;

  type deleteResult = number;

  type changeSexResult = number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    username: ?string;
    type?: string;
  };

  type SearchParams = {
    pageSize?: number;
    current?: number;
    keyword?: string;
    username: ?string;
    gender: ?string;
    type?: string;
  };

  type SearchAuctionParams = {
    searchValue: ?string
  };

  type AddAuctionBagParams = {
    username: ?string;
    userID:?string;
    auctionID:?string;
    auctionName: ?string;
    auctionMesUrl: ?string;
    auctionImageUrl:? string;
    auctionDescription: ?string;
  };

  type SearchAllAuctionParams = {
    auctionName: ?string
    auctionDescription: ?string
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
