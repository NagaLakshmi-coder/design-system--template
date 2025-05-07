import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import styles from './ToastWrapper.module.css'; // Import the CSS module

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastWrapper = ({ message, type }: { message: string; type?: 'success' | 'error' | 'info' | 'warning' }) => {
  const [show, setShow] = useState(true);

  return (
    <div className={styles.wrapper}>
      {show && (
        <Toast
          message={message}
          type={type}
          duration={3000}
          onClose={() => setShow(false)}
        />
      )}
      <button onClick={() => setShow(true)} className={styles.button}>
        Show Again
      </button>
    </div>
  );
};

export const SuccessToast: Story = {
  render: () => <ToastWrapper message="Success! Your action was completed." type="success" />,
};

export const ErrorToast: Story = {
  render: () => <ToastWrapper message="Oops! Something went wrong." type="error" />,
};

export const InfoToast: Story = {
  render: () => <ToastWrapper message="FYI: You have new updates." type="info" />,
};

export const WarningToast: Story = {
  render: () => <ToastWrapper message="Warning! Double check your form." type="warning" />,
};
