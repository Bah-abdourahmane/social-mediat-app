import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../postSide/PostShare";

export function ShareModal({ modalOpened, setModalOpened }) {
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
        size="55%"
      >
        <PostShare />
      </Modal>
    </>
  );
}
