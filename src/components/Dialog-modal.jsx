import React from 'react';
import { cn } from '../lib/utils';
import { X } from 'lucide-react';

// Modal Compound Component
// 使用方式：
// <Modal>
//   <ModalCloseButton onClick={...} />
//   <ModalHeader>
//     <ModalTitle>Title</ModalTitle>
//   </ModalHeader>
//   <ModalContent>...</ModalContent>
//   <ModalFooter>...</ModalFooter>
// </Modal>

export default function Modal({ className, children, ...props }) {
    return (
        <div
            className={cn(
                "bg-white rounded-lg p-6 shadow-lg w-full max-w-sm border border-gray-100 relative",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function ModalHeader({ className, children, ...props }) {
    return <div className={cn("mb-2", className)} {...props}>{children}</div>;
}

export function ModalTitle({ className, children, ...props }) {
    return (
        <h4 className={cn("text-lg font-bold text-content-main", className)} {...props}>
            {children}
        </h4>
    );
}

export function ModalContent({ className, children, ...props }) {
    return (
        <div className={cn("text-sm text-gray-500 mb-6", className)} {...props}>
            {children}
        </div>
    );
}

export function ModalFooter({ className, children, ...props }) {
    return (
        <div className={cn("flex justify-end gap-3", className)} {...props}>
            {children}
        </div>
    );
}

export function ModalCloseButton({ className, onClick, ...props }) {
    return (
        <button
            className={cn(
                "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors",
                className
            )}
            onClick={onClick}
            {...props}
        >
            <X className="w-5 h-5" />
        </button>
    );
}
