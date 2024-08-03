const UserAvatar = ({ user }: { user: any) => {
  return user?.picture !== undefined ? (
    <div
      className="w-10 h-10 overflow-hidden rounded-full cursor-pointer"
    >
      <img className="object-contain" src={user.picture} alt="avatar" />
    </div>
  ) : (
    <button
      className="flex items-center justify-center w-10 h-10 overflow-hidden text-lg font-medium text-center text-white bg-green-500 rounded-full cursor-pointer sm:text-xl"
    >
      {user?.name !== undefined ? user.name[0].toUpperCase() : null}
    </button>
  );
};

export default UserAvatar;
