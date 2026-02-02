import React from 'react';
import Modal, { ModalHeader, ModalTitle, ModalContent, ModalFooter, ModalCloseButton } from './Dialog-modal';

// Dialog 元件：封裝 Modal 的高階元件，簡化使用方式
// props:
// - title: 彈窗標題
// - children: 彈窗內文
// - footer: 底部按鈕區塊 (ReactNode)
// - showCloseButton: 是否顯示右上角關閉按鈕 (boolean)
// - onClose: 關閉按鈕點擊事件
export default function Dialog({
    title,
    children,
    footer,
    showCloseButton = false,
    onClose,
    className,
    ...props
}) {
    return (
        <Modal className={className} {...props}>
            {showCloseButton && <ModalCloseButton onClick={onClose} />}

            <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
            </ModalHeader>

            <ModalContent>
                {children}
            </ModalContent>

            {footer && (
                <ModalFooter>
                    {footer}
                </ModalFooter>
            )}
        </Modal>
    );
}
