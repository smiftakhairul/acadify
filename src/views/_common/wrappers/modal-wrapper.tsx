import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { isHttpLoadingStateAtom } from "../../../utils/states/common";

type Props = {
  id: string,
  children?: ReactNode,
  largeModal?: boolean,
  headerDisabled?: boolean,
  bodyDisabled?: boolean,
  headerTitle?: string,
  subHeaderTitle?: () => any,
  footerDisabled?: boolean,
  footerCloseBtnDisabled?: boolean,
  footerCloseBtnTitle?: string,
  footerSubmitBtnDisabled?: boolean,
  footerSubmitBtnTitle?: string,
  isForm?: boolean,
  formId?: string,
  onFormSubmit?: any,
  footerReverseAction?: boolean,
};

const ModalWrapper = (props: Props) => {
  const isHttpLoadingState = useRecoilValue(isHttpLoadingStateAtom);

  const footerContent = (type: string) => {
    return <>
      {
        {
          'submit': <>{!props.footerSubmitBtnDisabled && <button type="submit" className="btn btn-sm btn-primary" disabled={isHttpLoadingState}>{props.footerSubmitBtnTitle || 'Submit'}</button>}</>,
          'close': <>{!props.footerCloseBtnDisabled && <button type="button" className="btn btn-sm btn-outline-danger" data-dismiss="modal">{props.footerCloseBtnTitle || 'Close'}</button>}</>
        }[type] || <></>
      }
    </>
  }

  const modalContent = () => {
    return (
      <>
        {!props.bodyDisabled && <div className="modal-body">{props.children}</div>}
        {
          !props.footerDisabled && <div className="modal-footer">
            {footerContent(!props.footerReverseAction ? 'close' : 'submit')}
            {footerContent(!props.footerReverseAction ? 'submit' : 'close')}
          </div>
        }
      </>
    )
  }

  return (
    <>
      <div
        className="modal fade"
        id={props.id}
        tabIndex={-1}
        role="dialog"
        aria-labelledby={props.id}
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered ${props.largeModal && 'modal-lg'}`} role="document">
          <div className="modal-content">
            {
              !props.headerDisabled && <div className="modal-header">
                <h5 className="modal-title" id={`${props.id}Title`}>{props.headerTitle || 'Unknown Title'}</h5>
                {props.subHeaderTitle ? <p className="modal-title">{props.subHeaderTitle()}</p> : <></>}
              </div>
            }
            {
              props.isForm
                ? <form id={props.formId || `${props.id}Form`} onSubmit={(e) => {e.preventDefault(); props.onFormSubmit()}}>
                  {modalContent()}
                </form>
                : <>
                  {modalContent()}
                </>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalWrapper;
