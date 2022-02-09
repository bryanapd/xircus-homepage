import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { drawerContentStyle, mobileDrawerStyle } from "../styles/globalStyle";

export const Drawer = ({ children, isOpen, onClose }) => (
  <Drawer isOpen={isOpen} onClose={onClose} {...mobileDrawerStyle} placement="right" size="md">
    <DrawerOverlay />
    <DrawerContent {...drawerContentStyle}>
      <DrawerBody>{ children }</DrawerBody>
    </DrawerContent>
  </Drawer>
)