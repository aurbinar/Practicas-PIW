type ErrorMsgProps = {
  message: string;
};


export default function ErrorMsg({ message }: ErrorMsgProps) {
  return (
    <div className="error-message">
      <strong>Error: </strong> {message}
    </div>
  );
}