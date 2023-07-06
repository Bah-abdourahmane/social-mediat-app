import { Modal, useMantineTheme } from "@mantine/core";

export function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        size="62%"
      >
        <form className="flex flex-col items-center justify-center gap-4">
          <h3 className="font-bold text-lg">Your Info</h3>
          <div className="w-full flex gap-4 items-center">
            <input
              type="text"
              placeholder="First Name"
              className="outline-none bg-inputColor p-5 rounded-lg w-full"
              name="firstname"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="outline-none bg-inputColor p-5 rounded-lg w-full"
              name="lasttname"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Works at"
              className="outline-none bg-inputColor p-5 rounded-lg w-full"
              name="workAt"
            />
          </div>
          <div className="w-full flex gap-4 items-center">
            <input
              type="text"
              placeholder="Live in"
              className="outline-none bg-inputColor p-5 rounded-lg w-full"
              name="livein"
            />
            <input
              type="text"
              placeholder="Country"
              className="outline-none bg-inputColor p-5 rounded-lg w-full"
              name="country"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="RelationShip Status"
              className="outline-none bg-inputColor p-5 rounded-lg w-full"
              name="relationShip"
            />
          </div>
          <div className="w-full flex">
            <div className="">
              Profile Image
              <input type="file" name="profileImg" />
            </div>
            <div>
              Cover Image
              <input type="file" name="coverImg" />
            </div>
          </div>
          <button className="btnbg py-1 px-5 tracking-wider self-end">
            Updade
          </button>
        </form>
      </Modal>
    </>
  );
}
