
export const getParseFloat = (number: any = 0, fraction: number = 2) => {
  const res: any = parseFloat(number || 0).toLocaleString(undefined, {
    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction,
  });
  return (res % 1 === 0) ? parseInt(res) : res;
};

export const prepareFormFields = (formId: string) => {
  const formData: any = {};
  const form: any = document.getElementById(formId);
  if (!form) return formData;

  [...form.elements].forEach(({ name, type, value, checked }) => {
    if (!name) return;

    if (type === 'checkbox' || type === 'radio') {
      formData[name] = checked ? value : formData[name] || null;
    } else if (name.includes("multi-") || name.includes("[]")) {
      const fieldName = name.replace("multi-", "").replace("[]", "");
      formData[fieldName] = formData[fieldName] || [];
      if (value) formData[fieldName].push(value);
    } else {
      formData[name] = value;
    }
  });

  return formData;
};

export const openModal = (modalId: string) => {
  const modalRef = document.getElementById(modalId);
  if (modalRef) {
    const modal = new (window as any).bootstrap.Modal(modalRef);
    modal && modal.show();
  }
};

export const closeModal = (modalId: string) => {
  const modalRef = document.getElementById(modalId);
  if (modalRef) {
    const modal = (window as any).bootstrap.Modal.getInstance(modalRef);
    modal && modal.hide();
  }
};

export const refreshTooltips = () => {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new (window as any).bootstrap.Tooltip(tooltipTriggerEl);
  });
};
