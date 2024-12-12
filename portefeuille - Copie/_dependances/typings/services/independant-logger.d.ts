declare module IndependantLogger {
    /**
     * Model for a checkpoint, a moment we want to memorize in a script's execution
     */
    class CheckpointModel {
        /**
         * The checkpoint message
         * @type {string}
         */
        message: string;
        /**
         * Number of milliseconds elapsed since 1 January 1970 00:00:00 UTC. when we reach this checkpoint
         * In general, Date.now()
         * @type {number}
         */
        timestamp: number;
        /**
         * Delta in seconds with the previous checkpoint
         * @type {number}
         */
        deltaWithPreviousCheckpoint: number;
        constructor(_message: string, _timestamp: number, _deltaWithPreviousCheckpoint: number);
    }
    class Memory {
        static _checkpoints: CheckpointModel[];
        static _traceManager: MyWay.Services.Trace.TraceManager;
        /**
         * Ajoute un point d'étape pour tracer le fonctionnement du portail
         * @param {string} message [description]
         * @param {number} timestamp [description]
         * @param {log} boolean        log in the browser console (or not) the message with a human readable date
         */
        static addCheckpoint(message: string, timestamp: number, log: boolean): void;
    }
}
