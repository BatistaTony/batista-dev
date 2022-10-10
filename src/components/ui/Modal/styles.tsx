import styled from "styled-components";
import { motion } from "framer-motion";

export const OverlayModal = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
